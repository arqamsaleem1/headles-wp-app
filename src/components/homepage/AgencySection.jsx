const AgencySection = ({acfFields}) => {


    return (
        <section className="agency-area">
            <div className='agency-area-heading area-heading'>
                <h2> {acfFields.agency_area_heading} </h2>
            </div>

            <div className="agency-content">
                <div className="container">
                    <div dangerouslySetInnerHTML={{__html: acfFields.agency_area_content}} ></div>
                </div>
            </div>
        </section>
    );
}
 
export default AgencySection;