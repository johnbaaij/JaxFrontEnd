import {Payload} from "./payload";
import {Injectable} from "@angular/core";

export class FlowRequest {

  constructor(
    public status: string,
    public payload: Payload,
  ) { }


  //status: string;
  //payload: Payload;
}

@Injectable({
  providedIn: "root"
})
export class FlowAdapter {
  adapt(item: any): FlowRequest {
    return new FlowRequest(item.status, item.payload);
  }
}
