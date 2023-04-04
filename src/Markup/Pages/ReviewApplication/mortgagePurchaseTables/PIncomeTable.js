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
const PIncomeTable = ({incomeData}) => {
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
                  { title: "Have Income", field: "not_income" },
                  { title: "Base Employment", field: "base_employment_income" },
                  { title: "Military Employment", field: "military_employment_income" },
                  { title: "Other Employment", field: "other_income" },
                  { title: "Current", field: "current" },
                  { title: "primary", field: "primary" },
                  { title: "Self Employment", field: "self_employed" },
                  { title: "Employed By Other ", field: "" }, // not found key
                  { title: "Seasonal Income", field: "seasonal_income" },
                  { title: "Foreign Income", field: "foreign_income" },
                  { title: "Employer Name", field: "employee_name" },
                  { title: "Start Date", field: "start_date" },
                  { title: "Work Phone", field: "work_phone" },
                  { title: "Official Address", field: "office_address" },
                  { title: "Base", field: "base" },
                  { title: "Base Type", field: "base_type" },
                  { title: "Bonus", field: "bonus" },
                  { title: "Commission", field: "commission" },
                ]}
                data={incomeData?.map((e) => e)}
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
                title={"Income"}
              />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default PIncomeTable;
