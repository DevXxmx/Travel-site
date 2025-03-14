
const Location = () => {
  return (
    <div className=" py-10  pt-25 bg-white">
      <div className="container justify-self-center w-full   ">
        <div className="py-10 ">
          <h1 className="my-8 border-l-8 border-active py-2 pl-2 text-3xl font-bold">
            Location to visit
          </h1>
          <div className="rounded-xl justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.218045111738!2d3.0420483156016437!3d36.75288747995807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb0c5a7f4b1c9%3A0x7e2b5f5fe5a77d0c!2sEl%20Maschid%20El%20Kabire!5e0!3m2!1sen!2sdz!4v1700902186385!5m2!1sen!2sdz"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
