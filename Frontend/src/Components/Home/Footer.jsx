import { FaFacebook, FaFacebookMessenger, FaInstagram, FaPinterest, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";

const Footer = () => {
    return (
        <div>
 
            <div>
                <footer className="flex flex-col md:flex-row justify-evenly p-10 md:mt-12 bg-base-200 text-base-content">
                    <div className="text-sm">
                        <h6 className="font-bold"><button>Edu ed</button></h6>
                        <p className="mb-0"><button>About Us</button></p>
                        <p className="mb-0"><button>Our Services</button></p>
                        <p className="mb-0"><button>Work with Us</button></p>
                        <p className="mb-0"><button>FAQ</button></p>
                        <p className="mb-4"><button>Contact Us</button></p>
                    </div>
                    <div className="text-sm">
                        <h6 className="font-bold"><button>Quick Links</button></h6>
                        <p className="mb-0"><button>Listings</button></p>
                        <p className="mb-0"><button>Blog Posts</button></p>
                        <p className="mb-0"><button>Shop / Store</button></p>
                        <p className="mb-4"><button>Community</button></p>
                    </div>
                    <div className="text-sm">
                        <h6 className="font-bold"><button>How Do I</button></h6>
                        <p className="mb-0"><button>Sign Up</button></p>
                        <p className="mb-0"><button>Add a Listing</button></p>
                        <p className="mb-0"><button>Claim Listing</button></p>
                        <p className="mb-0"><button>Post a Query</button></p>
                        <p className="mb-0"><button>Add a Blog Post</button></p>
                        <p className="mb-4"><button>Other Queries</button></p>
                    </div>

                    <div>
                        <div>
                            <h6 className="font-bold"><button>Social Media</button></h6>
                            <p className="flex items-center gap-4 text-[#6D747A] my-4"><FaFacebook /> <FaTwitter /> <FaInstagram /> <FaPinterest /> <IoLogoGoogleplus /> <FaYoutube /><FaTelegram /> <FaFacebookMessenger /></p>
                        </div>
                        <div>
                            <h6 className="font-bold mb-[16px] mt-4"><button>Invite Friends</button></h6>
                       
                        </div>
                    </div>
                </footer>
                <div>
                    <p className="font-bold text-center text-xs bg-[#F7F5F9] py-6">© Edu ed reserve by return zero</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;