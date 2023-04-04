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
const MortGageTable = ({mortgageData}) => {


  console.log(mortgageData,"mortgageData")

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
                  { title: "Property Type", field: "property_type" },
                  { title: "Property Use", field: "use_of_property" },
                  { title: "Operate Business Here", field: "operate_business" },
                  { title: "Property Value", field: "price_of_property" },
                  { title: "Mortgage Balance", field: "down_payment" }
                ]}
                data={mortgageData?.map((e) => e)}
                options={{
                  rowStyle: {
                    backgroundColor: "#EEE",
                  },
                  actionsColumnIndex: -1,
                }}
                title={"Mortgage Info"}
              />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default MortGageTable;
