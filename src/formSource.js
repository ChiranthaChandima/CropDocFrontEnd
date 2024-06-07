export const userInputs = [
    {
      id: "dname",
      label: "Disease Name",
      type: "text",
      placeholder: "",
    },
    {
      id: "dnumber",
      label: "Disease Number",
      type: "number",
      placeholder: "",
    },
    {
      id: "dcase",
      label: "Disease Cause",
      type: "test",
      placeholder: "",
    },
    
  ];

  export const diseaseInputs = [
    {
      id: "dnumber",
      label: "Disease Number",
      type: "number",
      placeholder: "",
    },
    {
      id: "dname",
      label: "Disease Name",
      type: "text",
      placeholder: "",
    },
    {
      id: "cropfamily",
      label: "Crop Family",
      type: "select",
      placeholder: "",
      options: [
        "",
        "Solanaceae",
        "Rosaceae",
        "Lamiaceae",
        "Asteraceae",
        "Fabaceae",
        "Brassicaceae",
        "Apiaceae",
        "Poaceae",
        "Cucurbitaceae",
        "Rutaceae",
        "Myrtaceae",
        "Arecaceae"
      ],
    },
    {
      id: "dcase",
      label: "Disease Cause",
      type: "text",
      placeholder: "",
    },
    
  ];

  export const treatmentInputs = [
    {
      id: "dname",
      label: "Disease Name",
      type: "select",
      placeholder: "",
      options: sessionStorage?.getItem("disease") ? JSON.parse(sessionStorage?.getItem("disease"))?.map(item => item?.dname) : []
    },
    {
      id: "cause",
      label: "Cause",
      type: "text",
      placeholder: "",
    },
    {
      id: "tname",
      label: "Treatment Name",
      type: "text",
      placeholder: "",
    },    
    {
      id: "tsteps",
      label: "Treatment",
      type: "textarea",
      placeholder: "",
    },

  ];
  
  export const locationInputs = [
    {
      id: "district",
      label: "Discrict",
      type: "select",
      placeholder: "",
      options: [
        "",
        "Colombo",
        "Gampaha",
        "Kalutara",
        "Kandy",
        "Matale",
        "Nuwara Eliya",
        "Galle",
        "Matara",
        "Hambantota",
        "Jaffna",
        "Kilinochchi",
        "Mannar",
        "Mullaitivu",
        "Vavuniya",
        "Batticaloa",
        "Ampara",
        "Trincomalee",
        "Kurunegala",
        "Puttalam",
        "Anuradhapura",
        "Polonnaruwa",
        "Badulla",
        "Monaragala"
      ],
    },
    {
      id: "division",
      label: "Divisional",
      type: "text",
      placeholder: "Description",
    },
  ];
  
  // export const userColumns = [
  //   { field: "id", headerName: "ID", width: 70 },
  //   {
  //     field: "username",
  //     headerName: "User Name",
  //     width: 230,
  //   },
  //   {
  //     field: "district",
  //     headerName: "District",
  //     width: 230,
  //   },
  //   {
  //     field: "division",
  //     headerName: "Division",
  //     width: 230,
  //   },
  //   {
  //     field: "email",
  //     headerName: "Email",
  //     width: 230,
  //   },
  //   {
  //     field: "mobileNo",
  //     headerName: "Mobile Number",
  //     width: 230,
  //   },
  // ];