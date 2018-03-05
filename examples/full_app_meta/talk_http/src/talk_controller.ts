import {NextFunction, Request, Response} from 'express';
import {Logger} from 'loggerhythm';
import {AudienceResponse, IAudience, ITalkService} from 'talk_contracts';

export class TalkController {

  private talkService: ITalkService = undefined;

  constructor(talkService: ITalkService) {
    this.talkService = talkService;
  }

  public async handlePresentSomething(request: Request, response: Response, next: NextFunction): Promise<void> {
    const logger: Logger = Logger.createLogger('talk_controller');

    try {
      const audienceNumber: number = request.body.audienceSize;

      const audience: IAudience = {
        tell: (something: string): AudienceResponse => {

          logger.info('---------------------------------');
          logger.info('Our talk starts!');
          logger.info('- - - - - - - - - - - - - - - - -');
          logger.info(something);
          logger.info('- - - - - - - - - - - - - - - - -');
          logger.info('Our talk has finished!');
          logger.info('---------------------------------\n');

          if (audienceNumber > 30) {
            return AudienceResponse.Great;
          }
          if (audienceNumber > 10) {
            return AudienceResponse.Medium;
          }

          return AudienceResponse.Bad;
        },
      };

      this.talkService.presentSomething(audience);

      response.status(200).send('look into the console :P');

    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  }

}
