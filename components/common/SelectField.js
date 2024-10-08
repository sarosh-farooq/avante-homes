import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import ListSubheader from "@mui/material/ListSubheader";
import { styled, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import {
  IconButton,
  Stack,
  FilledInput,
  Typography,
  Link,
  Radio,
  useMediaQuery,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { BorderColor } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  //   open: { xs: false, md: false },
  PaperProps: {
    sx: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "auto",
      border: "1px solid",
      borderTop: "none",
      // display: { xs: "none", sm: "block" },
      marginTop: { xs: 2, md: 4 },
      backgroundColor: "background.default",
      backgroundImage: "none",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      borderBottomLeftRadius: "8px",
      borderBottomRightRadius: "8px",
      border: "none",
      boxShadow: "0px 20px 40px 0px #CDCDCD40",
    },
  },
};

const InputProps = {
  borderBottom: "none",
  fontSize: "10px",
  borderBottomLeftRadius: "0px",
  borderBottomRightRadius: "0px",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
};

export default function SelectField({
  formData,
  value,
  onChange,
  onClear,
  handleUpdateMobile,
  placeholder,
  placeholder2,
  options,
}) {
  const theme = useTheme();
  const [isOpen, setOpen] = React.useState(false); // State to track whether the select menu is open
  const [isOpenMobile, setOpenMobile] = React.useState(false); // State to track whether the select menu is open
  const isMobile = useMediaQuery("(min-width:600px)");

  const handleOpen = () => {
    if (isMobile) {
      setOpen(true);
    } else {
      setOpenMobile(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setOpenMobile(false);
  };

  React.useEffect(() => {
    if (isMobile == false) {
      setOpenMobile(false);
      setOpen(true);
    }
    setOpen(false);
  }, [isMobile]);

  return (
    <FormControl color="secondary" sx={{ width: { xs: "100%", md: 260 } }}>
      {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
      <Select
        labelid="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        name="bedrooms"
        value={value}
        onChange={onChange}
        displayEmpty
        input={
          <BootstrapInput
            placeholder="Saved Permutations"
            size="small"
            color="primary"
            value={value}
            sx={{
              //   "& .MuiInputBase-input": isOpen ? { ...InputProps } : {},
              "& .MuiSvgIcon-root": {
                color: isOpen ? "text.secondary" : "white",
              },
            }}
          />
        }
        renderValue={(selected) => {
          if (selected?.length == 0) {
            return (
              <Box
                sx={{
                  color: "#9DA1A3",
                  fontSize: "16px",
                }}
              >
                <em>{placeholder}</em>
              </Box>
            );
          }
          return selected;
        }}
        sx={{ display: isOpenMobile ? "none" : "flex" }}
        MenuProps={MenuProps}
        onClose={handleClose}
        onOpen={handleOpen}
        open={isOpen}
        color="primary"
        size="small"
        inputProps={{ "aria-label": "Without label" }}
      >
        <ListSubheader sx={{ paddingX: "16px", paddingY: "8px", pb: "6px", pr : '20px' }}>
          <Stack
            direction={"row"}
            width={"100%"}
            justifyContent="space-between"
            alignItems="center"
            gap={1}
          >
            <Typography
              color={"common.black"}
              variant="subtitle1"
              component={"p"}
              fontSize={"14px"}
              fontWeight={600}
            >
              {placeholder2}
            </Typography>

            <Link
              component={"p"}
              color={"secondary.main"}
              variant="subtitle1"
              fontSize={"12px"}
              fontWeight={300}
              onClick={() => {
                handleClose();
                onClear();
              }}
            >
              Clear
            </Link>
          </Stack>
        </ListSubheader>
        {options.map((item, index) => (
          <MenuItem key={index} sx={{ p: 0, paddingX: "8px", paddingY: "2px", backgroundColor: 'transparent !important' }} value={item.value}>
            <Radio
              size="small"
              color="secondary"
              checked={formData.bedrooms?.indexOf(item.title) > -1}
            />
            {item.title}
          </MenuItem>
        ))}
      </Select>

      {isOpenMobile && (
        <Stack display={{ xs: "flex", sm: "none" }}>
          <ListSubheader
            sx={{
              pb: "6px",
              pl: 0,
              pr: 0,
              pt: 2,
            }}
          >
            <Stack
              direction={"row"}
              width={"100%"}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                color={"common.black"}
                variant="subtitle1"
                component={"p"}
                fontSize={"14px"}
                fontWeight={600}
              >
                {placeholder2}
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={3}
              >
                <Link
                  component={"p"}
                  color={"secondary.main"}
                  variant="subtitle1"
                  fontSize={"12px"}
                  fontWeight={300}
                  onClick={() => {
                    handleClose();
                    onClear();
                  }}
                >
                  Clear
                </Link>
                <KeyboardArrowUpIcon
                  onClick={handleClose}
                  sx={{ fontSize: 22 }}
                />
              </Stack>
            </Stack>
          </ListSubheader>
          {options.map((item, index) => (
            <MenuItem
              onClick={() => {
                handleClose();
                handleUpdateMobile("All Bedrooms");
              }}
              sx={{ p: 0, minHeight: "36px" }}
              key={index}
            >
              <Radio
                size="small"
                color="secondary"
                checked={formData.bedrooms?.indexOf(item.title) > -1}
              />
              {item.title}
            </MenuItem>
          ))}
        </Stack>
      )}
    </FormControl>
  );
}

const BootstrapInput = styled(FilledInput)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: "0px",
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
    // borderColor: theme.palette.primary.main,
    // color: theme.palette.text.primary,
    fontSize: 15,
    padding: "6px 8px 8px 0px",
    transition: "1s ease-in",
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Inter"].join(","),
    transition: "0s ease-in",
    "&:focus": {
      //   borderRadius: "50px",
      // borderColor: '#80bdff',
      //   boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const CustomizedMenuItem = styled(MenuItem)(({ theme }) => ({
  height: "40px",
  paddingLeft: "12px",
  paddingRight: "12px",
  width: "100%",
  // color: 'red',
  // backgroundColor: 'red',
  "&:hover": {
    backgroundColor: theme.palette.background.paper,
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
    },
  },
}));
