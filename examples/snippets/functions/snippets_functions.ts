enum Importance {High = 'High', Medium = 'Medium', Low = 'Low'}

class ReportingComponent {

  private reportingService: IReportingService;

  constructor(service: IReportingService) {
    this.reportingService = service;
  }

  public generateReport(message: string, receiver: string): void {
    this.reportingService.generateReport(message, receiver);
  }

  // public generateReport(message: string, receiver: string, importance?: Importance) {
  //   this.reportingService.generateReport(message, receiver);
  //   this.reportingService.generateReport(message, receiver, importance);
  // }

  // public generateReport(message: string, receiver: string, maximumRetries: number = 5) {
  //   this.reportingService.generateReport(message, receiver, maximumRetries);
  //   this.reportingService.generateReport(message, receiver, 6);
  // }

}
