import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button
} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { logoutUser } from "../features/auth/authSlice";
import LogoutIcon from '@mui/icons-material/Logout';

const NavBar2 = () => {
 
    /**search */

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
       
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));



  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  /*femme */
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  function handleClick(e) {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }
    /*homme */
    const [anchorEl1, setAnchorEl1] = useState(null);
  const openMenu1 = Boolean(anchorEl1);
  function handleClick1(e) {
        setAnchorEl1(e.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    }
    /*enfants */
    const [anchorEl2, setAnchorEl2] = useState(null);
  const openMenu2 = Boolean(anchorEl2);
  function handleClick2(e) {
        setAnchorEl2(e.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    }
    /**aide */
    const [anchorEl3, setAnchorEl3] = useState(null);
  const openMenu3 = Boolean(anchorEl3);
  function handleClick3(e) {
        setAnchorEl3(e.currentTarget);
    };
    const handleClose3 = () => {
        setAnchorEl3(null);
    }
    /**vendeur */
    const [anchorEl4, setAnchorEl4] = useState(null);
  const openMenu4 = Boolean(anchorEl4);
  function handleClick4(e) {
        setAnchorEl4(e.currentTarget);
    };
    const handleClose4 = () => {
        setAnchorEl4(null);
    }
/**logique de la recherche */
const [query, setQuery] = useState("");

  
const onChangeSearch = (event) => {
  setQuery(event.currentTarget.value);
  console.log(query)
  
};
const handleSearch = () => {
  navigate(`/recherche=${query}`)
}



  return (
    <AppBar elevation="0" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
          component="div"
        >
          {/*logo */}
          <Box>
            {/*<IconButton>
              <MenuOutlinedIcon />
        </IconButton>*/}
        <Link to="/" style={{textDecoration:"none", color:"#1db5c0"}}> 
        <h3 style={{color:"#1db5c0", cursor:"pointer"}}>ALTERNY</h3>
        </Link>
          </Box>
          {/*Links */}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
                <Link to="/" style={{textDecoration:"none", color: "#616161"}}> 
              ACCEUIL{" "}
              </Link>
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
              onClick={handleClick}
            >
              FEMME{" "}
            </Typography>
            {/*femme drop down items */}
            <Menu id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}>
              <MenuItem onClick={() => navigate("/produits-collection/5/sous-collection/6")}>Robes</MenuItem>
              <MenuItem onClick={() => navigate("/produits-collection/5/sous-collection/7")}>Jupes</MenuItem>
              <MenuItem onClick={() => navigate("/produits-collection/5/sous-collection/8")}>Combinaisons et ensembles</MenuItem>
              <MenuItem onClick={() => navigate("/produits-collection/5/sous-collection/9")}>Chaussettes bas et collants</MenuItem>
              <MenuItem onClick={() => navigate("/produits-collection/5/sous-collection/4")}>Pulls gilets et sweats</MenuItem>
              <MenuItem onClick={() => navigate("/produits-collection/5/sous-collection/5")}>Hoodies et sweatshirts</MenuItem>
              <MenuItem onClick={() => navigate("/produits-collection/5/sous-collection/3")}> Manteaux et blousons</MenuItem>
            </Menu>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
              aria-controls="homme-menu"
              aria-haspopup="true"
              aria-expanded={openMenu1 ? 'true' : undefined}
              onClick={handleClick1}
            >
              HOMME{" "}
            </Typography>
            <Menu id='homme-menu'
             anchorEl={anchorEl1}
             open={openMenu1}
             onClose={handleClose1}>
              <MenuItem onClick={() => navigate("/produits-collection/9/sous-collection/24")}>Pulls et Gilets</MenuItem>
              <MenuItem onClick={() => navigate("/produits-collection/9/sous-collection/25")}>Pantalons</MenuItem>
              <MenuItem onClick={() => navigate("/produits-collection/9/sous-collection/26")}>Jeans Homme</MenuItem>
              <MenuItem onClick={() => navigate("/produits-collection/9/sous-collection/23")}>Sweats à capuche</MenuItem>
              <MenuItem onClick={() => navigate("/produits-collection/9/sous-collection/22")}>Vestes et manteaux</MenuItem>
            </Menu>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
              aria-controls="enfants-menu"
              aria-haspopup="true"
              aria-expanded={openMenu2 ? 'true' : undefined}
              onClick={handleClick2}
            >
              ENFANTS{" "}
            </Typography>
            <Menu id="enfants-menu"
            anchorEl={anchorEl2}
            open={openMenu2}
            onClose={handleClose2}>
              <MenuItem onClick={() => navigate("/produits-collection/11/sous-collection/39")}>Vêtements filles</MenuItem>
              <MenuItem onClick={() => navigate("/produits-collection/12/sous-collection/42")}>Vêtements garçons</MenuItem>
            </Menu>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
              aria-controls="aide-menu"
              aria-haspopup="true"
              aria-expanded={openMenu3 ? 'true' : undefined}
              onClick={handleClick3}
            >
                
              AIDE{" "}
              
            </Typography>
            <Menu id="aide-menu"
            anchorEl={anchorEl3}
            open={openMenu3}
            onClose={handleClose3}>
              <MenuItem>
              <Link to="/demande-de-retour" style={{textDecoration:"none", color: "#616161"}}> 
              Demande de retour
              </Link>
              </MenuItem>
            </Menu>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
              aria-controls="vendeur-menu"
              aria-haspopup="true"
              aria-expanded={openMenu4 ? 'true' : undefined}
              onClick={handleClick4}
            >
                 
              VENDEUR{" "}
              
            </Typography>
            <Menu id="vendeur-menu"
            anchorEl={anchorEl4}
            open={openMenu4}
            onClose={handleClose4}>
              <MenuItem>
              <Link to="/seller-register" style={{textDecoration:"none", color: "#616161"}}> 
              INSCRIPTION
              </Link>
              </MenuItem>
              <MenuItem>
              <Link to="/seller-login" style={{textDecoration:"none", color: "#616161"}}> 
              CONNEXION
              </Link>
              </MenuItem>
            </Menu>
          </Box>
          {/*Liens d'inscription et connexion */}
          {/*et boutons */}
          
              <Box sx={{display:"flex", alignItems:"center"}}> 
          <Search sx={{backgroundColor:"#D3D3D3", marginLeft:"4px"}}>
            <SearchIconWrapper>
              <SearchIcon sx={{cursor:"pointer"}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Recherchez…"
              inputProps={{ 'aria-label': 'search' }}
              value={query}
            onChange={onChangeSearch}
            />
          </Search>
          <Button onClick={() =>handleSearch()}>RECHERCHER</Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {auth.userLoaded ? ( <> <IconButton>
            <Link to="/Profile" style={{textDecoration:"none", color: "#616161"}}> 
              <PermIdentityOutlinedIcon />
              </Link>
            </IconButton> 
            <IconButton>
            
              <LogoutIcon onClick={() => {
                  dispatch(logoutUser(null))}} />
             
            </IconButton> 
            
            </>) : (
            <> 
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
                <Link to="/signup" style={{textDecoration:"none", color: "#616161"}}> 
              S'INSCRIRE{" "}
              </Link>
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
                <Link to="/login" style={{textDecoration:"none", color: "#616161"}}> 
              CONNEXION{" "}
              </Link>
            </Typography></>)}
            <IconButton>
            <Link to="/Cart" style={{textDecoration:"none", color: "#616161"}}> 
              <ShoppingCartOutlinedIcon />
              </Link>
            </IconButton>
            <span className="bag-quantity">
              <span>{cartTotalQuantity}</span>
            </span>
            <IconButton>
            <Link to="/Wishlist" style={{textDecoration:"none", color: "#616161"}}> 
              <FavoriteBorder />
              </Link>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar2;
