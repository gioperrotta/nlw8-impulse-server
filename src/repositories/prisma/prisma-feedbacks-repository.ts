import { prisma } from "../../prisma";
import { 
  FeedbacksCreateData, 
  FeedbacksReposritory } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksReposritory {
  async create({type, comment, screenshot}: FeedbacksCreateData){
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
  }

}