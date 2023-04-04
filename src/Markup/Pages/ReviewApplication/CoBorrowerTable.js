import React, { forwardRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import MaterialTable from "material-table";
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  Delete,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  SearchOutlined,
  ViewColumn,
} from "@material-ui/icons";
const CoBorrowerTable = ({coBorrower}) => {
    const defaultMaterialTheme = createTheme();

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => (
          <ChevronRight {...props} ref={ref} />
        )),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => (
          <ChevronLeft {...props} ref={ref} />
        )),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <SearchOutlined {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => (
          <ArrowDownward {...props} ref={ref} />
        )),
        ThirdStateCheck: forwardRef((props, ref) => (
          <Remove {...props} ref={ref} />
        )),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
      };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ThemeProvider theme={defaultMaterialTheme}>
              <MaterialTable
                icons={tableIcons}
                columns={[
                  { title: "Solely", field: "solely" },
                  { title: "Co-First Name", field: "cob_first_name" },
                  { title: "Co-Last Name", field: "cob_last_name" },
                  { title: "Co-Email", field: "cob_email" },
                  { title: "Co-Phone", field: "cob_phone" },
                  { title: "Sp-First Name", field: "sp_first_name" },
                  { title: "Sp-Last Name", field: "sp_last_name" },
                  { title: "Sp-Email", field: "sp_email" },
                  { title: "Sp-Phone", field: "sp_phone" },
                  { title: "Can Complete Task", field: "complete_task" },
                  ]}
                data={coBorrower?.map((e) => e)}
                actions={[
                  // {
                  //   // headerStyle:{width: "10%"},

                  //   icon: () => <Edit style={{ color: "#26ae61" }} />,
                  //   tooltip: "Edit Property",
                  //   // onClick: (value, rowData) => {
                  //   //   history.push("/editproperty/" + rowData.id);
                  //   //   console.log(rowData.id, "object");
                  //   // },
                  // },
                //   {
                //     icon: () => <Delete style={{ color: "red" }} />,
                //     tooltip: "Delete Property",
                //     onClick: (e, data) => {
                //       DelCompanies(data?.user?.id);
                //     },
                //   },
                ]}
                options={{
                  rowStyle: {
                    backgroundColor: "#EEE",
                  },
                  actionsColumnIndex: -1,
                }}
                title={"Co-Borrower"}
              />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoBorrowerTable;
