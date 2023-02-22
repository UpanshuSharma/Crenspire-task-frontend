import React from "react";
import Table from "react-bootstrap/Table";
import { TYPE_COLORS } from "../../utils/mock";
import "./NewTableComp.css";
function NewTableComp({ data }) {
  return (
    <div className="table-container">
      <Table striped bordered hover size="sm" className="data-table">
        <thead>
          <tr>
            <th className="th-hidden-mobile-view">#</th>
            <th>Email</th>
            <th>Name</th>
            <th>Wallet 1</th>
            <th className="th-hidden-mobile-view">Wallet 2</th>
            <th className="th-hidden-mobile-view">Wallet 3</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr className="row1" key={index}>
                <td
                  className="th-hidden-mobile-view"
                  style={{ backgroundColor: `${TYPE_COLORS[item.type]}` }}
                >
                  {index}
                </td>
                <td className="th-mobile-view">{item.email}</td>
                <td className="th-mobile-view">{item.fullName}</td>
                <td className="th-mobile-view">{item.wallet1}</td>
                <td className="th-hidden-mobile-view">{item.wallet2}</td>
                <td className="th-hidden-mobile-view">{item.wallet3}</td>
              </tr>
            );
          })}
          {/* <tr className="row1">
            <td className="th-hidden-mobile-view">1</td>
            <td className="th-mobile-view">Upanshu@gmail.com</td>
            <td className="th-mobile-view">Upanshu</td>
            <td className="th-mobile-view">12003</td>
            <td className="th-hidden-mobile-view">2893</td>
            <td className="th-hidden-mobile-view">97788</td>
          </tr>
          <tr className="row1">
            <td className="th-hidden-mobile-view">1</td>
            <td className="th-mobile-view">Upanshu@gmail.com</td>
            <td className="th-mobile-view">Upanshu</td>
            <td className="th-mobile-view">12003</td>
            <td className="th-hidden-mobile-view">2893</td>
            <td className="th-hidden-mobile-view">97788</td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
}

export default NewTableComp;
