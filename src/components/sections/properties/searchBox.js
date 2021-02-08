import React, { useState, useMemo } from "react"
import Select from "react-select"
import {
  Link,
  // navigate 
} from "gatsby"
// import { css } from "@emotion/react"
// import * as queryString from "query-string"

 const SearchBox = ({ ciudades, purposes, types, statuses, bathrooms, bedrooms, defaults, props }) => {
  

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
  const _bathroom = useMemo(() => (bathrooms),[bathrooms])
  const _bedroom = useMemo(() => (bedrooms),[bedrooms])
  
  const [bathroom, setBathroom] = useState()
  const [bedroom, setBedroom] = useState() 
  const [cities, setCities] = useState() 
  const [purpose, setPurpose] = useState() 
  const [type, setType] = useState() 
  const [status, setStatus] = useState() 
  
  const handleInputChangeCity = ec => { setCities(ec.value) }

  const handleInputChangePurpose = pc => { setPurpose(pc.value) }

  const handleInputChangeType = tc => { setType(tc.value) }

  const handleInputChangeStatus = sc => { setStatus(sc.value) }

  const handleInputChangeBathroom = btc => { setBathroom(btc.value) }
  const handleInputChangeBedroom = bdc => { setBedroom(bdc.value) }
  

  const convertToSlug = text => {
    // return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')
    return text
  }
  // const go = `/properties/${convertToSlug(cities)}/${convertToSlug(purpose)}/${convertToSlug(type)}/${convertToSlug(status)}/${bathroom}/${bedroom}/`
  const c = cities ? `/properties?city=${convertToSlug(cities)}` : `/properties?`
  const p = purpose ? `${c}&purpose=${convertToSlug(purpose)}` : c
  const t = type ? `${p}&type=${convertToSlug(type)}` : p
  const s = status ? `${t}&status=${convertToSlug(status)}` : t
  const bt = bathroom ? `${s}&bathroom=${bathroom}` : s
  const bd = bedroom ? `${bt}&bedroom=${bedroom}` : bt


  const go = bd
  return (
    <>
		<div className="right-box">
			<div className="row">
				<div className="col-md-12 space-div">
					<Select 
						options={_cities}
						defaultValue={ defaults ? defaults.cities[0]: { value: "all", label: "-- All Cities --" } }
						onChange={handleInputChangeCity}
						styles={customStyles}
                  	/>
				</div>
				<div className="col-md-12 space-div">
					<Select 
						options={_purpose}
						defaultValue={defaults ? defaults.purpose[0]: { value: "any", label: "-- Any Purpose --"}}
						onChange={handleInputChangePurpose}
						styles={customStyles}
					/>
				</div>
				<div className="col-md-12 space-div">
					<Select 
						options={_type}
						defaultValue={defaults ? defaults.type[0]: { value: "any", label: "-- Any Type --" }}
						onChange={handleInputChangeType}
						styles={customStyles}
					/>
				</div>
				<div className="col-md-12 space-div">
					<Select 
						options={_status}
						defaultValue={defaults ? defaults.status[0]: { value: "any", label: "-- Any Type --" }}
						onChange={handleInputChangeStatus}
						styles={customStylesB}
					/>
				</div>
				<div className="col-md-12 space-div">
					<Select 
						options={_bathroom}
						defaultValue={ { value: "---", label: "Select Bathroom" }}
						onChange={handleInputChangeBathroom}
						styles={customStylesB}
					/>
				</div>
				<div className="col-md-12 space-div">
				<Select 
            options={_bedroom}
            defaultValue={{ value: "---", label: "Select Bedroom" }}
            onChange={handleInputChangeBedroom}
            styles={customStylesB}
          />
				</div>
				<div className="col-md-12 space-div">
					<Link to={go} className="btn btn-default search-button">Search</Link>
					{/* <button type="button" className="btn btn-default search-button">
					SEARCH NOW
					</button> */}
				</div>
			</div>
		</div>
    </>
  )
}

export default SearchBox