export class ProgressBar
{

    progressBar:any ={
        dynamicValue:false
      }

      
    constructor() { }


    progressBar_Starting()
  {
    this.progressBar.dynamicValue=true;
  }

  progressBar_Stop()
  {
    this.progressBar.dynamicValue=false;
  }

}