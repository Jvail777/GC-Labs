interface IRacer {
  //Properties
  team: string;
  speed: number;
  //Methods
  Accelerate(): void;
  IsFuelEmpty(): boolean;
}

export { IRacer };
