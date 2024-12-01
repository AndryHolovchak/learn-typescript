type StringifyId<T> = T extends {id: any} ? Omit<T, 'id'> & {id: string} : never

type User = {
  id: number;
  name: string;
}

type UserWithStringId = StringifyId<User>;

const test: UserWithStringId = {
  id: "3",
  name: "test"
}