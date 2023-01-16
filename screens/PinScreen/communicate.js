import {Actor, HttpAgent} from '@dfinity/agent';

import {idlFactory} from './dapp.did.js';
export {idlFactory} from './dapp.did.js';

export const canisterId = 's5ezz-7yaaa-aaaal-qalmq-cai';

export const createActor = (canisterId, options = {}) => {
  const agent = new HttpAgent({host: 'https://boundary.ic0.app/'});

  if (options.agent && options.agentOptions) {
    console.warn(
      'Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent.',
    );
  }

  // Fetch root key for certificate validation during development
  agent.fetchRootKey().catch(err => {
    console.warn(
      'Unable to fetch root key. Check to ensure that your local replica is running',
    );
    console.error(err);
  });

  //   console.log(agent);

  //   // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options.actorOptions,
  });
};

export const dapp_backend = createActor(canisterId);
