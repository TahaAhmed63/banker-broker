import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  withRouter,
} from "react-router-dom";
import Home from "./Markup/Pages/Home";
import "./css/style.css";
import Borrowerlogin from "./Markup/Auth/Borrowerlogin";
import Borrower_types from "./Markup/Pages/Borrower_types";
import mortage from "./Markup/Pages/mortage_type/purchase/mortage";
import Mortageinfo from "./Markup/Pages/mortage_type/purchase/Mortageinfo";
import Personalinfo from "./Markup/Pages/mortage_type/purchase/Personalinfo";
import CoBorrower from "./Markup/Pages/mortage_type/purchase/CoBorrower";
import Income from "./Markup/Pages/mortage_type/purchase/Income";
import BaseEdit from "./Markup/Pages/mortage_type/purchase/BaseEdit";
import MilitryEdit from "./Markup/Pages/mortage_type/purchase/MilitryEdit";
import Credit from "./Markup/Pages/mortage_type/purchase/Credit";
import OtherEdit from "./Markup/Pages/mortage_type/purchase/OtherEdit";
import Realstate from "./Markup/Pages/mortage_type/purchase/Realstate";
import Demographic from "./Markup/Pages/mortage_type/purchase/Demographic";
import Declaration from "./Markup/Pages/mortage_type/purchase/Declaration";
import Assets from "./Markup/Pages/mortage_type/purchase/Assets";
import CoBorroweredit from "./Markup/Pages/mortage_type/purchase/CoBorroweredit";
import InComeedit from "./Markup/Pages/mortage_type/purchase/InComeEdit";
import Applications from "./Markup/Pages/Applications";
import Dashboard from "./Markup/Pages/Dashboard";
import RefMortageinfo from "./Markup/Pages/mortage_type/Refinance/RefMortageinfo";
import RefPersonalInfo from "./Markup/Pages/mortage_type/Refinance/RefPersonalInfo";
import RefIncome from "./Markup/Pages/mortage_type/Refinance/RefIncome";
import RefAssets from "./Markup/Pages/mortage_type/Refinance/RefAssets";
import RefAssetsEdit from "./Markup/Pages/mortage_type/Refinance/RefAssetsEdit";
import RefRealState from "./Markup/Pages/mortage_type/Refinance/RefRealState";
// import AllUser from "./Markup/Auth/AllUserLogin";
import RefDeclaration from "./Markup/Pages/mortage_type/Refinance/RefDeclaration";
import RefDemographic from "./Markup/Pages/mortage_type/Refinance/RefDemographic";
import RefReviewAndSubmit from "./Markup/Pages/mortage_type/Refinance/RefReviewAndSubmit";
import RefCredit from "./Markup/Pages/mortage_type/Refinance/RefCredit";
import Heloc from "./Markup/Pages/mortage_type/heloc/Heloc";
import LanMortageinfo from "./Markup/Pages/mortage_type/heloc/Landlord/LanMortageinfo";
import LanPersonalInfo from "./Markup/Pages/mortage_type/heloc/Landlord/LanPersonalInfo";
import LanIncome from "./Markup/Pages/mortage_type/heloc/Landlord/LanIncome";
import LanAssets from "./Markup/Pages/mortage_type/heloc/Landlord/LanAssets";
import LanRealState from "./Markup/Pages/mortage_type/heloc/Landlord/LanRealState";
import LanDeclaration from "./Markup/Pages/mortage_type/heloc/Landlord/LanDeclaration";
import LanDemographic from "./Markup/Pages/mortage_type/heloc/Landlord/LanDemographic";
import LanCredit from "./Markup/Pages/mortage_type/heloc/Landlord/LanCredit";
import TanPersonalInfo from "./Markup/Pages/mortage_type/heloc/Tanent/TanPersonalInfo";
import RefCoBorrower from "./Markup/Pages/mortage_type/Refinance/RefCoBorrower";
import RefCoBorroweredit from "./Markup/Pages/mortage_type/Refinance/RefCoBorroweredit";
import TanAdditionalInfo from "./Markup/Pages/mortage_type/heloc/Tanent/TanAdditionalInfo";
import TanCoSigner from "./Markup/Pages/mortage_type/heloc/Tanent/TanCoSigner";
import TanIncome from "./Markup/Pages/mortage_type/heloc/Tanent/TanIncome";
import TanBackground from "./Markup/Pages/mortage_type/heloc/Tanent/TanBackground";
import TanDemographic from "./Markup/Pages/mortage_type/heloc/Tanent/TanDemographic";
import { TanDocument } from "./Markup/Pages/mortage_type/heloc/Tanent/TanDocument";
import UpdatableEdge from "./Markup/Pages/Hirachy key/ShowIndex";
import CompanyCreation from "./Markup/Pages/Hirachy key/CompanyCreation";
import Index from "./Markup/Pages/Hirachy key";
import AssetsEdit from "./Markup/Pages/mortage_type/purchase/EditAsset";
import MRPReview from "./Markup/Pages/ReviewApplication/MRPReview";
import MRAReview from "./Markup/Pages/ReviewApplication/MRAReview";
import MTAReview from "./Markup/Pages/ReviewApplication/MTAReview";
import PersonalTable from "./Markup/Pages/ReviewApplication/PersonalTable";
import PurReview from "./Markup/Pages/mortage_type/purchase/PurReview";
import TanMilitryEdit from "./Markup/Pages/mortage_type/heloc/Tanent/Income/MilitryEdit";
import TanBaseEdit from "./Markup/Pages/mortage_type/heloc/Tanent/Income/BaseEdit";
import TanOtherEdit from "./Markup/Pages/mortage_type/heloc/Tanent/Income/OtherEdit";
import TanReview from "./Markup/Pages/mortage_type/heloc/Tanent/TanReviewSubmit";
// import BaseEdit from "./Markup/Pages/mortage_type/Refinance/BaseEdit";
import MilitaryEdit from "./Markup/Pages/mortage_type/Refinance/MilitaryEdit";
import PrivateRoute from "./Markup/Protected";
import TanCosignEdit from "./Markup/Pages/mortage_type/heloc/Tanent/TanCoSignerEdit";
import Profile from "./Markup/Pages/Profile/Profile";
import UpdateProfile from "./Markup/Pages/Profile/UpdateProfile";
// import OtherEdit from "./Markup/Pages/mortage_type/Refinance/OtherEdit";
import BorrowerRegistration from "./Markup/Auth/BorrowerRegistration";

function App() {
  const isLogin = localStorage.getItem("usertoken");
  let token = localStorage.getItem("usertoken");

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={token ?Borrower_types :  Borrowerlogin} />
          <Route exact path="/Borrower/Login" component={Borrowerlogin} />
          <Route exact path="/Borrower/Signup/:useremail/:key/:id" component={BorrowerRegistration} />
          {/* Protected Routes */}
          <PrivateRoute exact path="/Show/Index" component={UpdatableEdge} />
          {/* purchase */}
          <PrivateRoute exact path="/selectType" component={Borrower_types} />
          <PrivateRoute exact path="/HirarKey" component={Index} />
          <PrivateRoute exact path="/new_mortage" component={mortage} />
          <PrivateRoute exact path="/mortage_info" component={Mortageinfo} />
          <PrivateRoute exact path="/personal_info" component={Personalinfo} />
          <PrivateRoute
            exact
            path="/personal_info/:id"
            component={Personalinfo}
          />
          <PrivateRoute exact path="/Co-Borrowers" component={CoBorrower} />
          <PrivateRoute exact path="/BaseEdit/:id" component={BaseEdit} />
          <PrivateRoute exact path="/MilitryEdit/:id" component={MilitryEdit} />
          <PrivateRoute exact path="/OtherEdit/:id" component={OtherEdit} />
          <PrivateRoute exact path="/AssetsEdit/:id" component={AssetsEdit} />
          <PrivateRoute
            exact
            path="/Co-Borrowers/edit/:id"
            component={CoBorroweredit}
          />
          <PrivateRoute exact path="/Income/edit/:id" component={InComeedit} />
          <PrivateRoute exact path="/Income" component={Income} />
          <PrivateRoute exact path="/Credit" component={Credit} />
          <PrivateRoute exact path="/Real_state" component={Realstate} />
          <PrivateRoute exact path="/Demographic" component={Demographic} />
          <PrivateRoute exact path="/declaration" component={Declaration} />
          <PrivateRoute exact path="/assets" component={Assets} />
          <PrivateRoute exact path="/applications" component={Applications} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/purchase/review" component={PurReview} />
          {/* <PrivateRoute exact path="/applications" component={Review} /> */}
          {/* data table */}
          {/* refinance */}
          <Route exact path="/ref/mortageinfo" component={RefMortageinfo} />
          <Route exact path="/ref/mortageinfo/:id" component={RefMortageinfo} />
          <Route exact path="/ref/editmortageinfo" component={RefMortageinfo} />
          <Route exact path="/ref/Co-Borrowers" component={RefCoBorrower} />
          <Route
            exact
            path="/ref/Co-Borrowers/edit/:id"
            component={RefCoBorroweredit}
          />
          <Route exact path="/ref/personalinfo" component={RefPersonalInfo} />
          <Route
            exact
            path="/ref/personalinfo/:id"
            component={RefPersonalInfo}
          />
          <Route exact path="/ref/income" component={RefIncome} />
          <Route exact path="/ref/editbase/:id" component={BaseEdit} />
          <Route exact path="/ref/editmilitary/:id" component={MilitaryEdit} />
          <Route exact path="/ref/editother/:id" component={OtherEdit} />
          <Route exact path="/ref/assets" component={RefAssets} />
          <Route exact path="/ref/assetsedit/:id" component={RefAssetsEdit} />
          <Route exact path="/ref/realstate" component={RefRealState} />
          <Route exact path="/ref/declaration" component={RefDeclaration} />
          <Route exact path="/ref/demographic" component={RefDemographic} />
          <Route exact path="/ref/credit" component={RefCredit} />
          <Route
            exact
            path="/ref/refreviewandsubmit"
            component={RefReviewAndSubmit}
          />

          {/* profile */}
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/updateprofile" component={UpdateProfile} />

          {/* profile */}
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/updateprofile" component={UpdateProfile} />

          {/* Lanlord */}
          <PrivateRoute exact path="/heloc" component={Heloc} />
          <PrivateRoute
            exact
            path="/heloc/lanlord/mortgageinfo"
            component={LanMortageinfo}
          />
          <PrivateRoute
            exact
            path="/heloc/lanlord/personalinfo"
            component={LanPersonalInfo}
          />
          <PrivateRoute
            exact
            path="/heloc/lanlord/income"
            component={LanIncome}
          />
          <PrivateRoute
            exact
            path="/heloc/lanlord/assets"
            component={LanAssets}
          />
          <PrivateRoute
            exact
            path="/heloc/Lanlord/realstate"
            component={LanRealState}
          />
          <PrivateRoute
            exact
            path="/heloc/lanlord/declaration"
            component={LanDeclaration}
          />
          <PrivateRoute
            exact
            path="/heloc/lanlord/demographic"
            component={LanDemographic}
          />
          <PrivateRoute
            exact
            path="/heloc/lanlord/credit"
            component={LanCredit}
          />
          <PrivateRoute
            exact
            path="/heloc/mortgage"
            component={LanMortageinfo}
          />
          {/*Tanent*/}
          <PrivateRoute
            exact
            path="/heloc/tanent/personalinfo"
            component={TanPersonalInfo}
          />
          <PrivateRoute
            exact
            path="/heloc/tanent/additionalinfo"
            component={TanAdditionalInfo}
          />
          <PrivateRoute
            exact
            path="/heloc/tanent/cosigner"
            component={TanCoSigner}
          />
          <PrivateRoute
            exact
            path="/Tan/Co-Signers/edit/:id"
            component={TanCosignEdit}
          />
          <PrivateRoute
            exact
            path="/heloc/tanent/BaseEdit/:id"
            component={TanBaseEdit}
          />
          <PrivateRoute
            exact
            path="/heloc/tanent/income/OtherEdit/:id"
            component={TanOtherEdit}
          />
          <PrivateRoute
            exact
            path="/heloc/tanent/MilitryEdit/:id"
            component={TanMilitryEdit}
          />
          <PrivateRoute
            exact
            path="/heloc/tanent/income"
            component={TanIncome}
          />
          <PrivateRoute
            exact
            path="/heloc/tanent/background"
            component={TanBackground}
          />
          <PrivateRoute
            exact
            path="/heloc/tanent/demographic"
            component={TanDemographic}
          />
          <PrivateRoute
            exact
            path="/heloc/tanent/document"
            component={TanDocument}
          />
          <PrivateRoute
            exact
            path="/heloc/tanent/review"
            component={TanReview}
          />
          {/* Review Page */}
          <PrivateRoute
            exact
            path="/reviewapplication/review/:id/mpa"
            component={MRPReview}
          />
          <PrivateRoute
            exact
            path="/reviewapplication/review/:id/mra"
            component={MRAReview}
          />
          <PrivateRoute
            exact
            path="/reviewapplication/review/:id/new"
            component={MTAReview}
          />
          <PrivateRoute exact path="/personaltable" component={PersonalTable} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
