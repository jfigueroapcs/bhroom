import React, { useState, useMemo } from "react"
import Select from "react-select"
import { Link } from "gatsby"
import { css } from "@emotion/react"

export default ({ ciudades, purposes, types, statuses }) => {
  

  const customStyles = useMemo(
    () => ({
      dropdownIndicator: (provided) => ({
        color: "#fbd00f",
        padding: 9,
        display: "flex", 
      }),
      indicatorSeparator: (provided) => ({
        background: "#fbd00f",
        alignSelf: "stretch",
        marginBottom: 8,
        marginTop: 8,
        width: 1,
      }),
      option: (provided, state) => ({
        ...provided,
        border: "1px dotted black",
        color: state.data.color,
        padding: 10,
      }),
      menuList: (provided) => ({
        ...provided,
        maxHeight: 189,
      }),
      control: (provided) => ({
        ...provided,
	      marginBottom: 30,
        border: "1px solid rgb(229, 229, 229)",
	      boxShadow: "0 0 0 4px rgba(236, 236, 236, 0.3)"
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: state.data.color,
      }),
    }),
    []
  )
  const customStylesB = useMemo(
    () => ({
      dropdownIndicator: (provided) => ({
        ...provided,
        color: "#fbd00f",
        padding: 9,
        display: "flex", 
      }),
      indicatorSeparator: (provided) => ({
        ...provided,
        background: "#fbd00f",
        alignSelf: "stretch",
        marginBottom: 8,
        marginTop: 8,
        width: 1,
      }),
      option: (provided, state) => ({
        ...provided,
        border: "1px dotted black",
        color: state.data.color,
        padding: 10,
      }),
      menuList: (provided) => ({
        ...provided,
        maxHeight: 120,
      }),
      control: (provided) => ({
        ...provided,
	      marginBottom: 30,
        border: "1px solid rgb(229, 229, 229)",
	      boxShadow: "0 0 0 4px rgba(236, 236, 236, 0.3)"
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: state.data.color,
      }),
    }),
    []
  )
  const _cities = useMemo(() => (ciudades), [ciudades])
  const _purpose = useMemo(() => (purposes), [purposes])
  const _type = useMemo(() => (types), [types])
  const _status = useMemo(() => (statuses), [statuses])
  const _bathroom = useMemo(
    () =>[
      { value: "1", label: "1 Bathroom" },
      { value: "2", label: "2 Bathroom" },
      { value: "3", label: "3 Bathroom" },
      { value: "4", label: "4 Bathroom" },
      { value: "5", label: "5 Bathroom" },
      { value: "6", label: "6 Bathroom" },
      { value: "7", label: "7 Bathroom" },
      { value: "8", label: "8 Bathroom" },
      { value: "9", label: "9 Bathroom" },
    ]
  )
  const _bedroom = useMemo(
    () =>[
      { value: "1", label: "1 Bedroom" },
      { value: "2", label: "2 Bedroom" },
      { value: "3", label: "3 Bedroom" },
      { value: "4", label: "4 Bedroom" },
      { value: "5", label: "5 Bedroom" },
      { value: "6", label: "6 Bedroom" },
      { value: "7", label: "7 Bedroom" },
      { value: "8", label: "8 Bedroom" },
      { value: "9", label: "9 Bedroom" },
    ]
  )
  
  const [bathroom, setBathroom] = useState(3)
  const [bedroom, setBedroom] = useState(2) 
  const [cities, setCities] = useState(_cities[0].value) 
  const [purpose, setPurpose] = useState(_purpose[0].value) 
  const [type, setType] = useState(_type[0].value) 
  const [status, setStatus] = useState(_status[0].value) 

  const handleInputChangeCity = ec => { setCities(ec.value) }

  const handleInputChangePurpose = pc => { setPurpose(pc.value) }

  const handleInputChangeType = tc => { setType(tc.value) }

  const handleInputChangeStatus = sc => { setStatus(sc.value) }

  const handleInputChange = event => {
    const value = event.value
    const name = event.name
    if(name === 'bathroom'){setBathroom(value)}
    else if(name === 'bedroom'){ setBedroom(value) }
  }
  const convertToSlug = text => {
    return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')
  }
  
  return (
    <>
       <section id="search-box" className="no-margin">
        <div className="container search-container fixed-map">
          <div className="search-options sample-page">
            <div className="searcher">
              <div className="row margin-div">
                <div className="col-sm-6 col-md-4 cities">
                  <Select 
                    options={_cities}
                    defaultValue={{ value: "all", label: "-- All Cities --" }}
                    onChange={handleInputChangeCity}
                    styles={customStyles}
                  />
                </div>
                <div className="col-sm-6 col-md-4">
                  <Select 
                    options={_purpose}
                    defaultValue={{ value: "any", label: "-- Any Purpose --"}}
                    onChange={handleInputChangePurpose}
                    styles={customStyles}
                  />
                </div>
                <div className="col-sm-6 col-md-4">
                  <Select 
                    options={_type}
                    defaultValue={{ value: "any", label: "-- Any Type --" }}
                    onChange={handleInputChangeType}
                    styles={customStyles}
                  />
                </div>
                <div className="col-sm-6 col-md-4">
                  <Select 
                    options={_status}
                    defaultValue={{ value: "any", label: "-- Any Type --" }}
                    onChange={handleInputChangeStatus}
                    styles={customStylesB}
                  />
                </div>
                <div className="col-sm-6 col-md-4 margin-bottom">
                  <Select 
                    options={_bathroom}
                    defaultValue={{ value: "---", label: "Select Bathroom" }}
                    onChange={handleInputChange}
                    styles={customStylesB}
                  />
                </div>
                <div className="col-sm-6 col-md-4 margin-bottom">
                  <Select 
                    options={_bedroom}
                    defaultValue={{ value: "---", label: "Select Bedroom" }}
                    onChange={handleInputChange}
                    styles={customStylesB}
                  />
                </div>
              </div>
              <div className="margin-div footer">
                <span css={css`font-size: 3rem; text-align: center`}>
                  Bhoomimantra Inc
                </span>
                <Link to={`/properties/${convertToSlug(cities)}/${convertToSlug(purpose)}/${convertToSlug(type)}/${convertToSlug(status)}/${bathroom}/${bedroom}/`} className="btn btn-default search-button">Search</Link>
                {/* <button type="button" className="btn btn-default search-button">
                  Search
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
