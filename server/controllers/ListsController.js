import BaseController from "../utils/BaseController";
import Auth0Provider from "@bcwdev/auth0provider";
import { dbContext } from "../db/DbContext";
import socketService from "../services/SocketService";

export class ListsController extends BaseController {
  constructor() {
    super("api/lists");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getListsByBoardId)
      .post("", this.create);
  }

  getListsByBoardId(req, res, next) {
    res.send([])
  }

  async create(req, res, next) {
    try {
      res.send(req.body)
      // lets tell everyone in the 
      // board room that a list was added
      socketService.messageRoom(req.body.boardId, "addList", req.body)
    } catch (error) {
      next(error);
    }

  }

}