
import c3 from "c3";

const months = ["Jan", "feb","Mar","Apr", "May","June"];

window.loadChart = function (json) {
  console.log(json);
  const obj = JSON.parse(json);
  console.log(obj);

  const { type, data } = obj;

  var chart = c3.generate({
    size: {
      width: 640
    },
    bindto: '#chart',
    axis: {
      x: {
        type: "category",
      },
    },
    data: {
      onclick: function (clickedData) {
        console.log(clickedData);
        const {id, index} = clickedData;
        const month = months[index];
        console.log(id, index, month);
        const object = { id, month };
        console.log(object);
        FileMaker.PerformScript("Get Data", JSON.stringify(object));
      },
      x:"x",
      type: type,
      colors: {
        Mazda: '#ff0000',
        Ford: '#00ff00',
        Toyota: '#0000ff'
    },
      columns: data,
    }
  });
}
