import {BaseRouter, HttpExtension} from '@essential-projects/http_node';
import {TalkController} from './talk_controller';

export class TalkRouter extends BaseRouter {

  private talkController: TalkController = undefined;

  public config: any = undefined;

  constructor(talkController: TalkController) {
    super();

    this.talkController = talkController;
  }

  public get baseRoute(): string {
    return this.config.baseRoute || 'talk';
  }

  public async initialize(): Promise<void> {
    super.initialize();
  }

  public async initializeRouter(): Promise<void> {
    this.router.post('/present_something', this.talkController.handlePresentSomething.bind(this.talkController));
  }
}
