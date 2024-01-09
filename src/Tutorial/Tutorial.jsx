
const Tutorial = () => {
  return (
    <>
      <div>
        <h3>Getting Started</h3>
        <p>It is easy to begin using this app. Just paste in a csv link into the input box and press the LOAD button. You can get csv files from github gist or any other location. Here is a sample csv file link: https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv
        </p>
      </div>

      <div>
        <h3>Variables</h3>
        <p>After loading a list of variables will appear on the left sidebar under the title Variables. Please select the variables that you would want visualized. The selected variables will appear on the next row title "Selected Variables". You can then proceed to choose the visualization by clicking on either the  Bar Chart, Scatter Plot, or Histogram. Please note that there are specfications on how to use each visualization and if more than one variable is chosen then the default would be to display the first variables needed for the given visualization.</p>
      </div>
      <div>
        <h3>Selected Variables</h3>
        <p>The selected variable can be deselected by clicking on it. Please be sure that the selected variables section is empty when loading a new dataset</p>
      </div>
      <div>
        <h3>Lastly: Hire me please</h3></div>
    </>
  )
}
export default Tutorial;