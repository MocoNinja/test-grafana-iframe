import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

function Dashboard(props) {
    const [datetime, setDatetime] = useState({
        "from-ts": 1629962313743,
        "to-ts": 1629967233302,
        "from-date": new Date(1629962313743),
        "to-date": new Date(1629967233302),
    });

    const getIframe = (search) => {
        const url = `http://raspberrypi.local:3000/grafana/d-solo/xfpJB9FGz/1-node-exporter-for-prometheus-dashboard-en-v20201010?orgId=1&from=${search["from-ts"]}&to=${search["to-ts"]}&var-origin_prometheus=&var-job=node_exporter&var-hostname=All&var-node=raspberrypi4:9100&var-device=All&var-interval=2m&var-maxmount=%2Fmnt%2FEstraible&var-show_hostname=raspberrypi4&var-total=1&panelId=${props.panelId}`;

        return <iframe title={props.title.toLowerCase().replace(" ", "_")} src={url} height="450" />
    }

    const changedatefrom = (data) => {
        if (data !== null) {
            setDatetime({
                "to-ts": datetime['to-ts'],
                "to-date": datetime["to-date"],
                "from-ts": data.getTime(),
                "from-date": data
            })
        }
    }

    const changedateto = (data) => {
        if (data !== null) {
            setDatetime({
                "from-ts": datetime['from-ts'],
                "from-date": datetime["from-date"],
                "to-ts": data.getTime(),
                "to-date": data
            })
        }
    }

    const renderDatePickers = () =>
        <>
            <div className="col-2">
                <DateTimePicker
                    onChange={changedatefrom}
                    disableClock={true}
                    clearIcon={null}
                    format="y-MM-dd HH:mm:ss"
                    value={datetime['from-date']}
                />
            </div>
            <div className="col-2">
                <DateTimePicker
                    onChange={changedateto}
                    disableClock={true}
                    clearIcon={null}
                    format="y-MM-dd HH:mm:ss"
                    value={datetime['to-date']}
                />
            </div>
        </>

    return (
        <>
            <header>
                <h3 className="text-center">{props.title}</h3>
            </header>
            <div className="row justify-content-between">
                {renderDatePickers()}
            </div>
            <div className="row my-5">
                {getIframe(datetime)}
            </div>
        </>
    );

}

export default Dashboard;