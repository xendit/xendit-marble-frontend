import { initializeFirebaseClient } from '@app-builder/infra/firebase';
import {
  type ClientRepositories,
  makeClientRepositories,
} from '@app-builder/repositories/init.client';
import { getClientEnv } from '@app-builder/utils/environment.client';

import { makeAuthenticationClientService } from './auth/auth.client';
import { makeI18nextClientService } from './i18n/i18next.client';

function makeClientServices(repositories: ClientRepositories) {
  return {
    authenticationClientService: makeAuthenticationClientService(
      repositories.authenticationClientRepositoryPromise
    ),
    i18nextClientService: makeI18nextClientService(),
  };
}

function initClientServices() {
  const firebaseClientPromise = initializeFirebaseClient({
    firebaseOptions: getClientEnv('FIREBASE_OPTIONS'),
    authEmulatorHost: getClientEnv('AUTH_EMULATOR_HOST', ''),
  });
  const clientRepositories = makeClientRepositories(firebaseClientPromise);
  return makeClientServices(clientRepositories);
}

export const clientServices = initClientServices();