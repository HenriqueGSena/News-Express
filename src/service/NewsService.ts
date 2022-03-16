import axios from "axios";
import { Component, Provide } from "vue-property-decorator";
import Vue from "vue/types/umd";

const baseApiUrl = "https://newsapi.org/v2";


export default class NewsService {
  
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
