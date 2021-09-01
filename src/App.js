import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

import {dateToTimestamp, timestampToDate, timestampToIsoDate } from './utils';


function App() {

  const [datetime, setDatetime] = useState({
    "from-ts": 1629962313743,
    "to-ts": 1629967233302,
    "from-date": timestampToIsoDate(1629962313743) ,
    "to-date": timestampToIsoDate(1629967233302),
  });



  const toggleSearch = () => {
    const dateToSet = (datetime["from-ts"] === 1629957394185)
    ? {"from-ts": 1629962313743, "to-ts": 1629967233302}
    : {"from-ts": 1629957394185, "to-ts": 1630015199000}
    setDatetime(dateToSet)
  }

  const getIframe = (search) => {
    const url = `http://raspberrypi.local:3000/grafana/d-solo/xfpJB9FGz/1-node-exporter-for-prometheus-dashboard-en-v20201010?orgId=1&from=${search["from-ts"]}&to=${search["to-ts"]}&var-origin_prometheus=&var-job=node_exporter&var-hostname=All&var-node=raspberrypi4:9100&var-device=All&var-interval=2m&var-maxmount=%2Fmnt%2FEstraible&var-show_hostname=raspberrypi4&var-total=1&panelId=7`;
    console.log(url)
    return <iframe src={url} width="850" height="450" frameborder="0" />;
  }

  const changedatefrom = (data) => {
    if (data !== null)  {
    setDatetime({
      "to-ts": datetime['to-ts'],
      "to-date": datetime["to-date"],
      "from-ts": dateToTimestamp(data),
      "from-date": data 
    })
  }
  }

  const changedateto = (data) => {
    if (data !== null)  {
    setDatetime({
      "from-ts": datetime['from-ts'],
      "from-date": datetime["from-date"],
      "to-ts": dateToTimestamp(data),
      "to-date": data 
    })
  }
  }

  return (
    <div className="App">
      <p>{JSON.stringify(datetime)}</p>
        {
          /*
          <iframe src="http://raspberrypi.local:3000/grafana/?orgId=1&from=1630399657148&to=1630421257148&panelId=7" width="1920" height="1080"/>
          */
        }
        {/*
        <iframe src="http://raspberrypi.local:3000/grafana/d-solo/xfpJB9FGz/1-node-exporter-for-prometheus-dashboard-en-v20201010?orgId=1&from=1630378301635&to=1630421501635&panelId=7" width="1920" height="1080" frameborder="0"></iframe>
      */}
      {getIframe(datetime)}
      <button onClick={toggleSearch} name="TOGGLE" value="TOGGLE">TOGGLE</button>
      <DateTimePicker
        onChange={changedatefrom}
        disableClock={true}
        clearIcon={null}
        format="y-MM-dd HH:mm:ss"
        value={datetime['from-date']}
        />
      <DateTimePicker
        onChange={changedateto}
        disableClock={true}
        clearIcon={null}
        format="y-MM-dd HH:mm:ss"
        value={datetime['to-date']}
      />
    </div>
  );
}

export default App;
