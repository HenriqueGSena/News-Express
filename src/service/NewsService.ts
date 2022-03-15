import axios from "axios";

const baseApiUrl = "https://newsapi.org/v2";

export default class NewsService {
  static findEverythingNewsByParameter($data: Record<string, any>, searchword: string) {
    throw new Error("Method not implemented.");
  }
  
  public findEverythingNewsByParameter(
    data: string,
    assunto: string
  ): Promise<any> {
    let payload = {
      q: assunto,
      from: data,
      sortBy: "",
      apiKey: "ca26dfefe6e8488d88bdc0b51a311335",
    };
    const params = new URLSearchParams(payload).toString();
    let url = `/${baseApiUrl}/everything?/${params}`;
    return new Promise<any>((resolve, reject) => {
      axios
        .get(url)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }
}
