//There are 3 steps involve in this
//1..We will collects the data in the input field via refs
//2..We will combine(store) that data into an object all together
//3..We will make a function and do api call via fetch or axios or we can also make a custom http component

// To send the data uncomment it and paste the code as it is in the component only the class approach to functional approach
//only sending data of 1st column of the row

// function SendData(){
//     const
// }
import { createRoot } from "react-dom/client";
// import { useRef, useState } from "react";

function NavigationBar() {

  // const OnbCallRef = useRef();
  // const [changeV,setB] = useState()
  // const valuesD = (event) => {
  //   setB(event.target.value);
  // }

  const submitDetails = (event) => {
    event.preventDefault();
    console.log('whats up')
    // const onbValue = OnbCallRef.current.value;
    // console.log(onbValue)
    //axios.post('api').then((res) => {
    //   console.log(res)
    // }) //by this we can send data to api
  }

  return (
    <React.Fragment>
      <form onSubmit={submitDetails}>
        <table>
          <tbody>
            <tr>Month1</tr>
            <tr>
              <th contenteditable="true">Onboarding Call</th>
              <td contenteditable="true" ></td>                             
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
            </tr>
            <tr>
              <th contenteditable="true">Google Search Console Aceess</th>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
            </tr>
            <tr>
              <th contenteditable="true">Google Analytics</th>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
            </tr>
            <tr>
              <th contenteditable="true">Website Acesses</th>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
            </tr>
            <tr>
              <th contenteditable="true">Technical Audit</th>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
            </tr>
            <tr>
              <th contenteditable="true">Anchor Text and Semantic Analytics</th>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
            </tr>
            <tr>
              <th contenteditable="true">Competitor Analysis </th>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
            </tr>
            <tr>
              <th contenteditable="true">Anchor Text/URL Mapping</th>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
            </tr>
            <tr>
              <th contenteditable="true">Google Data Studio Report</th>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
            </tr>
            <tr>
              <th contenteditable="true">Site level Optimization</th>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
            </tr>
            <tr>
              <th contenteditable="true">On Page Optimization</th>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
            </tr>
            <tr>
              <th contenteditable="true">Content Creation</th>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
            </tr>
            <tr>
              <th contenteditable="true">Premium Press Release</th>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
              <td contenteditable="true"></td>
            </tr>
          </tbody>
        </table>
          <h2>CLick Here </h2>
          <button
            style={{ color: "azure", fontSize: 30, backgroundColor: "blue" }}
          >
            Send
          </button>
      </form>
    </React.Fragment>
  );
}

const domNode = document.getElementById("navigation");
const root = createRoot(domNode);
root.render(<NavigationBar />);
