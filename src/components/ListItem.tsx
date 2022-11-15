import type { User } from "../types/user";
import type { FC } from "react";

export const ListItem: FC<User> = (props) => {
  const { id, name, age } = props;
  return (
    <p>
      {id}:{name}({age})
    </p>
  );
};
