export interface IFirebaseConf {
  apiKey: string;
  messagingSenderId: string;
  appId: string;
  projectId: string;
}

export interface IFirebaseServiceAccount {
  projectId: string;
  privateKeyId: string;
  privateKey: string;
  clientEmail: string;
  clientId: string;
  authURI: string;
  tokenURI: string;
  authProviderX509CertURL: string;
  clientX509CertURL: string;
  universeDomain: string;
}

export type TDataValue = { [x: string]: any };
