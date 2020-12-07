import {User} from './user.model';

export class TransferModel {
  id: number;
  amount: number;
  receiverID: number;
  senderID: number;
}
