import { useQuery } from "@tanstack/react-query";
import axios, { Axios } from "axios";

const searchDefinition = (word: string)=> {
  const { isPending, error, data } = useQuery({
    queryKey: ["word"],
    queryFn: () =>
      axios
        .get(`https://wordsapiv1.p.mashape.com/words/${word}`)
        .then((res) => res.data),
  });

  return { isPending, error, data };
};

export default searchDefinition;
