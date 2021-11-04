export interface IDragon {
  createdAt?: string;
  name: string;
  type: string;
  histories?: [
    {
      description: string;
    }
  ];
  id: number | undefined;
  avatar?: string;
}
