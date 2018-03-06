enum Importance {High = 'High', Medium = 'Medium', Low = 'Low'}

interface IReportingService {
  generateReport(message: string, receiver: string): void;
  sendReport(message: string): boolean;
}

class ReportingComponent {

  private reportingService: IReportingService;

  constructor(service: IReportingService) {
    this.reportingService = service;
  }

  public generateReport(message: string, receiver: string): void {
    this.reportingService.generateReport(message, receiver);

  // public generateReport(message: string, receiver: string, importance?: Importance) {
  //   this.reportingService(message, receiver);

  //   this.reportingService(message, receiver, importance);
  // }

  // public generateReport(message: string, receiver: string, importance?: Importance, maximumRetries: number = 5) {
  //   this.reportingService(message, receiver, importance, maximumRetries);

  //   this.reportingService(message, receiver, importance, 6);
  // }

}


