import FormGet2 from "../form/FormGet2";

export default function GetSection() {
    return (
        <>
            <section className="section-get-in flat-spacing-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className="s-title only-title font-3 text-linear px-16 px-xl-0">Get in touch</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <FormGet2 />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
