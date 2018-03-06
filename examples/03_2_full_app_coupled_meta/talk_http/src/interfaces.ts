
export interface ITalkService {
  presentSomething(audience: IAudience): void;
}

export interface IAudience {
  tell(something: string): AudienceResponse;
}

export enum AudienceResponse {
  Great = 'WOOO',
  Medium = 'MEH.',
  Bad = 'GTFO',
}
