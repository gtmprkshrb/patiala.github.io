const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoiZ3RtcHJrc2hyYiIsImEiOiJjamZ0bXBqZnMxd3E5MnduejVjdGpuN2R4In0.vvrRpEdZWNwaKUO6vmgRHw",
  CSV: "https://docs.google.com/spreadsheets/d/1GkVelMVCJnz5kzsqVXmIIxHR7JXSRCO4xIoTr0DkWe0/gviz/tq?tqx=out:csv&sheet=data",
  center: [76.3390134,30.3467846],
  zoom: 10,
  title: "City Dashboard",
  description:
    "Everything in your neighbourhood in one place for the city of Patiala! Ward level analytics is coming soon",
  sideBarInfo: ["ShopName", "Description"],
  popupInfo: ["ShopName"],
  filters: [

    {
      type: "dropdown",
      title: "Category: ",
      columnHeader: "Category",
      listItems: [
        "Govt Services",
        "Environment-Civic Data"
      ],
    },
    {
      type: "dropdown",
      title: "Sub Category: ",
      columnHeader: "SubCategory",
      listItems: [
        "Others",
        "Defence Hospitals",
        "SDH/CHC",
        "Corporators",
        "MLA",
        "Waste",
        "Citizen Services",
        "Electricity",
        "Campaigns",
        "Issue Reported",
        "PHCs",
        "Volunteers",
        "AQM"
      ],
    }
  ],
};
