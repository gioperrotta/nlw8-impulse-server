export interface FeedbacksCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksReposritory {
  create: (data: FeedbacksCreateData) => Promise<void>;

}