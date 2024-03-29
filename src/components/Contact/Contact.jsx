const Contact = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-14">
  <div className="hero-content flex-col lg:flex-row-reverse gap-12">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Fedback Form!</h1>
      <p className="py-6">Please share your honest opinion for better service.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-outline bg-green-400 rounded-lg py-4 px-7 text-black hover:bg-[#23BE0A] ">Share Feedback</button>
        </div>
      </form>
    </div>
  </div>
            </div>
    );
};

export default Contact;