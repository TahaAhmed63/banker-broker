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
const PDemographicTable = ({demographicData}) => {
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
                  { title: "American Indian/Alaska Native", field: "American_indian_or_Alaska_native" },
                  { title: "Principal Tribe", field: "principal_tribe" },
                  { title: "Asian", field: "asian" },
                  { title: "Asian Indian", field: "asian_indian" },
                  { title: "Chinese", field: "chinese" },
                  { title: "Filipino", field: "filipino" },
                  { title: "Japanese", field: "japanese" },
                  { title: "Korean", field: "korean" },
                  { title: "Veitnamese", field: "vietnamese" },
                  { title: "Other Asian", field: "other_asian" },
                  { title: "Other Asian Details", field: "other_asian_details" },
                  { title: "Black Or African American", field: "black_or_african_american" },
                  { title: "Native Hawaiian/Pacific Islander", field: "native_hawaiian_or_pacific_islander" },
                  { title: "Native Hawaiian", field: "native_hawaiian" },
                  { title: "Samoan", field: "samoan" },
                  { title: "Gaumanian/Chamorro", field: "guamanian_or_chamorro" },
                  { title: "Other Pacific Islander", field: "other_pacific_islander" },
                  { title: "Other Pacific Islander Details", field: "other_pacific_islander_details" },
                  { title: "White", field: "white" },
                  { title: "Do Not Wish To Provide Race", field: "do_not_wish_to_provide_race" },
                  { title: "Hispanic/Latino", field: "hispanic_or_latino" },
                  { title: "Cuban", field: "cuban" },
                  { title: "Ethnicity Samoan", field: "" },
                  { title: "Maxican", field: "mexican" },
                  { title: "Other Hispanic/Latino Details", field: "other_hispanic_or_latino_details" },
                  { title: "Not Hispanic/Latino", field: "not_hispanic_or_latino" },
                  { title: "Do Not Wish To Provide Ethnacity", field: "do_not_wish_to_provide_ethnicity" },
                  { title: "Other Hispanic", field: "other_Hispanic" },
                  { title: "Male", field:  "gender"},
                  { title: "Female", field: "gender" },
                  { title: "Do Not Wish To Provide Gender", field: "gender" },            
                ]}
                data={demographicData?.map((e) => e)}
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
                title={"Demographic"}
              />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDemographicTable;
