enum Importance {High = 'High', Medium = 'Medium', Low = 'Low'};

interface IReportingService {
  generateReport(message: string, receiver: string): void;
  sendReport(message: string): boolean;
}

class ReportingComponent {

  private reportingService: IReportingService;

  constructor(service: IReportingService) {
    this.reportingService = service;
  }

  public generateReport(message: string): void {
    this.reportingService.generateReport(message);
  }

  public sendReport(message: string): Promise<boolean> {
    return new Promise((resolve: Function, reject: Function): void => {
      try {
        this.reportingService.sendReport(message);
      } catch (error) {
        reject(error);
      }
      resolve(true);
    });
  }

  public handleMessage(message: string) {
    //example
    this.sendReport(message).then()
  }

}
