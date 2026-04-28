import { useCallback, useEffect, useState } from "react";
import { echo,  } from "./echo";
import {
  fetchWinToday,
  fetchGameDetail,
  fetchRemainingToday,
  fetchRankingToday,
  fetchRankingYesterday,
  fetchRechargeUrl,
  fetchPrizeDistribution,
  fetchPlayerInfo,
  fetchMusicSetting,
  saveMusicSetting,
  betPlace,
  type WinToday,
  type GameDetailsData,
  type RankingItem,
  type RechargeUrlResponse,
  type PrizeDistributionProps,
  type PlayerDetailsData,
} from "../api/api";
import {
  REALTIME_CHANNEL,
  REALTIME_EVENT,
  getAssetUrl,
} from "../config/gameconfig";
export function resolveAssetUrl(path: string): string {
  return getAssetUrl(path);
}
type GameStore = {
  gameDetails: GameDetailsData | null;
  rankingTodays: RankingItem[];
  rankingYesterdays:RankingItem[];
  url?:RechargeUrlResponse | null;
  prizeDistribution:PrizeDistributionProps|null;
  playerInfo: PlayerDetailsData | null;
  isLoading: boolean;
  isMusicEnabled: boolean;
  isMusicSettingLoading: boolean;
musicOverridden: boolean;
remaining:number;
winToday:WinToday|null;
};
const listeners = new Set<(state: GameStore) => void>();
let store: GameStore = {
  gameDetails: null,
  rankingTodays: [],
  rankingYesterdays: [],
  url:null,
  prizeDistribution:null,
  playerInfo: null,
  isLoading: true,
  isMusicSettingLoading: true,
  isMusicEnabled: true,
musicOverridden: false,
remaining:0,
winToday:null,
};
let hasInitialized = false;
let initialLoadPromise: Promise<void> | null = null;
function emit() {
  listeners.forEach((listener) => listener(store));
}
function updateStore(
  partial: Partial<GameStore> | ((current: GameStore) => Partial<GameStore>),
) {
  const nextPartial = typeof partial === "function" ? partial(store) : partial;
  store = {
    ...store,
    ...nextPartial,
  };
  emit();
}

async function runRefreshGameData() {
  updateStore({ isLoading: true, isMusicSettingLoading: true });
  try {
    const [gameDetail,rankingToday,rankingYesterday,player,url,prizeDistribution,isMusicEnabled, winToday] = await Promise.all([
      fetchGameDetail(),
      fetchRankingToday(),
      fetchRankingYesterday(),
      fetchPlayerInfo(),
      fetchRechargeUrl(),
      fetchPrizeDistribution(),
      fetchMusicSetting(),
      fetchWinToday(),
    ]);
  updateStore({
    gameDetails: gameDetail,
    rankingTodays: rankingToday,
    rankingYesterdays: rankingYesterday,
  playerInfo: player,
  url: url,
  isMusicSettingLoading: false,
  prizeDistribution:prizeDistribution,
  isMusicEnabled,
  isLoading: false,
  winToday:winToday,
});
  } catch (error) {
    updateStore({ isLoading: false, isMusicSettingLoading: false,});
    throw error;
  }
}
function initializeStore() {
  if (hasInitialized) return;
  hasInitialized = true;
  const channel = echo.channel(REALTIME_CHANNEL);
  const eventName = `.${REALTIME_EVENT}`;
  channel.listen(eventName, async () => {
    await runRefreshGameData();
  });
}
export async function bootstrapGameStore() {
  initializeStore();
  if (!initialLoadPromise) {
    initialLoadPromise = runRefreshGameData().finally(() => {
      initialLoadPromise = null;
    });
  }
  await initialLoadPromise;
}
export function useGame() {
  const [snapshot, setSnapshot] = useState({ ...store });
  useEffect(() => {
    void bootstrapGameStore().catch((error) => {
      console.error("Failed to bootstrap game store", error);
    });

    const listener = (nextState: GameStore) => {
      setSnapshot({ ...nextState });
    };

    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

const handlePrizeDistribution= useCallback(async () => {
    const data = await fetchPrizeDistribution();
    updateStore({ prizeDistribution: data });
    return data;
  }, []);

const handleWinToday= useCallback(async () => {
    const data = await fetchWinToday();
    updateStore({ winToday: data });
    return data;
  }, []);

  const handleRechargeRedirect = useCallback(async () => {
  try {
    const data = await fetchRechargeUrl();

    if (data.url && data.url.startsWith("http")) {
      updateStore({url:data});
      window.location.href = data.url;
    }
  } catch (error) {
    console.error(error);
  }
}, []);

  const handlePlaceBet = useCallback(async ( amount: number,) => {
    // const currentBalance = Number.parseFloat(store.playerInfo?.balance ?? "0");
    // if (currentBalance < amount) {
    //   // throw new Error("Insufficient balance");
    // }
    const response: betPlace = await betPlace(amount, );
    return response;
  }, []);

const handleSetMusicEnabled = useCallback(async (nextValue: boolean) => {
    await saveMusicSetting( nextValue);
    updateStore({ isMusicEnabled: nextValue });
  }, []);
 
const handleRemainingToday= useCallback(async () => {
    const data = await fetchRemainingToday();
    return data;
  }, []);
const handleRankingToday= useCallback(async () => {
    const data = await fetchRankingToday();
    return data;
  }, []);
const handleRankingYesterday= useCallback(async () => {
    const data = await fetchRankingYesterday();
    return data;
  }, []);
const clearCurrentRoundBets = useCallback(() => {
  }, []);

  return {
    betAmounts: snapshot.gameDetails?.bet_amounts ?? [],
    options: snapshot.gameDetails?.options ?? [],
    gameDetails: snapshot.gameDetails,
    playerInfo: snapshot.playerInfo,
    isLoading: snapshot.isLoading,
    isMusicEnabled: snapshot.isMusicEnabled,
    isMusicSettingLoading: snapshot.isMusicSettingLoading,
    rankingToday: snapshot.rankingTodays,
    rankingYesterday: snapshot.rankingYesterdays,
    rechargeUrl: snapshot.url?.url || null,
    prizeDistribution:snapshot.prizeDistribution,
    placeBet: handlePlaceBet,
    setMusicEnabled: handleSetMusicEnabled,
    clearCurrentRoundBets,
    handleRechargeRedirect,
    handlePrizeDistribution,
    handleRemainingToday,
    handleWinToday,
    handleRankingToday,
    handleRankingYesterday,
  };
}
