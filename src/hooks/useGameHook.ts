import { useCallback, useEffect, useState } from "react";
import { echo,  } from "./echo";
import {
  fetchGameDetail,
  createRound,
  makeGameResult,
  fetchGameResults,
  fetchRemainingToday,
  fetchRankingToday,
  fetchRankingYesterday,
  fetchRechargeUrl,
  fetchPrizeDistribution,
  fetchPlayerInfo,
  placeBet as placeBetRequest,
  fetchMusicSetting,
  saveMusicSetting,
  type GameDetailsData,
  type CreateRoundResponse,
  type ResultData,
  type GameResults,
  type RankingItem,
  type RechargeUrlResponse,
  type PrizeDistributionProps,
  type PlaceBet,
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
  roundData: CreateRoundResponse | null;
  makeResult: ResultData | null;
  results: GameResults | null;
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
};
const listeners = new Set<(state: GameStore) => void>();
let store: GameStore = {
  gameDetails: null,
  roundData: null,
  makeResult: null,
  results: null,
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
};
let hasInitialized = false;
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
    const [gameDetail,gameResults,rankingToday,rankingYesterday,player,url,prizeDistribution,isMusicEnabled] = await Promise.all([
      fetchGameDetail(),
      fetchGameResults(),
      fetchRankingToday(),
      fetchRankingYesterday(),
      fetchPlayerInfo(),
      fetchRechargeUrl(),
      fetchPrizeDistribution(),
      fetchMusicSetting(),
    ]);
  updateStore({
    gameDetails: gameDetail,
    results: gameResults,
    rankingTodays: rankingToday,
    rankingYesterdays: rankingYesterday,
  playerInfo: player,
  url: url,
  isMusicSettingLoading: false,
  prizeDistribution:prizeDistribution,
  isMusicEnabled,
  isLoading: false,
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
}
export function useGame() {
  const [snapshot, setSnapshot] = useState({ ...store });
  useEffect(() => {
    initializeStore();

    const listener = (nextState: GameStore) => {
      setSnapshot({ ...nextState });
    };

    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const handleCreateRound = useCallback(async () => {
    const data = await createRound();
    updateStore({ roundData: data });
    return data;
  }, []);

const handlePrizeDistribution= useCallback(async () => {
    const data = await fetchPrizeDistribution();
    updateStore({ prizeDistribution: data });
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

  const handleGameRound = useCallback(async (roundId: number) => {
    const data = await makeGameResult(roundId);
    updateStore({
      makeResult: data.data,
    });
    return data.data;
  }, []);

  const handleMakeResult = useCallback(async (roundId: number) => {
    const data = await makeGameResult(roundId);
    const [player,gameResults,rankingToday,rankingYesterday,] = await Promise.all([
      fetchPlayerInfo(),
      fetchGameResults(),
      fetchRankingToday(),
      fetchRankingYesterday(),
    ]);
    updateStore({
      makeResult: data.data,
      playerInfo: player,
      results: gameResults,
      rankingTodays: rankingToday,
      rankingYesterdays: rankingYesterday,
    });
    return data;
  }, []);

  const handlePlaceBet = useCallback(async (optionId: number, amount: number,) => {
    const currentBalance = Number.parseFloat(store.playerInfo?.balance ?? "0");
    if (currentBalance < amount) {
      throw new Error("Insufficient balance");
    }
    const response: PlaceBet = await placeBetRequest(optionId, amount,);
    return response;
  }, []);
  const reserveBetBalance = useCallback((amount: number) => {
    if (amount <= 0) {
      return;
    }
  }, []);

  const releaseBetBalance = useCallback((amount: number) => {
    if (amount <= 0) {
      return;
    }
  }, []);

const handleSetMusicEnabled = useCallback(async (nextValue: boolean) => {
    await saveMusicSetting( nextValue);
    updateStore({ isMusicEnabled: nextValue });
  }, []);
 
const handleRemainingToday= useCallback(async () => {
    const data = await fetchRemainingToday();
    return data;
  }, []);
const clearCurrentRoundBets = useCallback(() => {
  }, []);

  return {
    betAmounts: snapshot.gameDetails?.bet_amounts ?? [],
    options: snapshot.gameDetails?.options ?? [],
    gameDetails: snapshot.gameDetails,
    playerInfo: snapshot.playerInfo,
    results: snapshot.results,
    roundData: snapshot.roundData,
    makeResult: snapshot.makeResult,
    isLoading: snapshot.isLoading,
    isMusicEnabled: snapshot.isMusicEnabled,
    isMusicSettingLoading: snapshot.isMusicSettingLoading,
    rankingToday: snapshot.rankingTodays,
    rankingYesterday: snapshot.rankingYesterdays,
    rechargeUrl: snapshot.url?.url || null,
    prizeDistribution:snapshot.prizeDistribution,
    createRound: handleCreateRound,
    makeGameRound:handleGameRound,
    makeGameResult: handleMakeResult,
    placeBet: handlePlaceBet,
    reserveBetBalance,
    releaseBetBalance,
    setMusicEnabled: handleSetMusicEnabled,
    clearCurrentRoundBets,
    handleRechargeRedirect,
    handlePrizeDistribution,
    handleRemainingToday,
  };
}
