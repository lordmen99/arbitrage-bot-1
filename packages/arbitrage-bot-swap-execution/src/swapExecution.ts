import {
  ExchangePlugin,
  Swap,
  SwapResult,
  ISwapExecutionManager,
} from "@stove-labs/arbitrage-bot";
import * as _ from "lodash";

export class SwapExecutionManager implements ISwapExecutionManager {
  constructor(public exchanges: ExchangePlugin[], public keychains: any) {}

  getExchangePluginBySwap(swap: Swap): ExchangePlugin {
    // find which plugin should be used for which swap
    // look for identifier+ecosystemIdentifier match in the configured plugins
    return {} as ExchangePlugin;
  }

  // this logic can live in a standalone plugin, e.g. SwapExecutionBatchPlugin or SwapExecutionContractPlugin
  public async executeSwaps(swaps: Swap[]): Promise<SwapResult[]> {
    const grouppedSwaps = _.groupBy(swaps, "ecosystemIdentifier");
    // go through all the identifiers
    Object.keys(grouppedSwaps).map((ecosystemIdentifier) => {
      // find keychain by ecosystem identifier and use it to authorise the swap
      // in case of tezos, pass information from the keychain to a taquito signer....
      const swaps = grouppedSwaps[ecosystemIdentifier];
      // iterate through swaps and forge a batch operation for each ecosystem identifier
      // forge an internal operation for the inside of the batch using an ExchangePlugin
      // retrieved using this.getExchangePluginBySwap(swap).forgeOperation(swap)
    });
    return [];
  }
}