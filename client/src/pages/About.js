import React from 'react';
import Layout from '../components/Layout/Layout';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <Layout>
      <div className="about-page">
      <div className="about-container">
        {/* Main About Us Section */}
        <div className="first">
          <h1>About Us</h1>
          <p>
            Generation was envisioned in 1983 by a husband-wife duo, Saad and Nosheen Rahman, 
            as a solution to the growing demand for affordable fashion by the urban Pakistani woman. 
            Today this family’s ideology has culminated into a leading ready-to-wear womenswear brand 
            that provides fresh products to their stores a few times each week with no repetition in design.
          </p>
          <p>
            The Generation Woman has since become an iconic symbol that holds this vision together, 
            a woman who celebrates her family’s tradition with a permanent undertone of innovation and creativity.
          </p>
          <p>
            The Generation Story begins from a family and moves forward with the concept of building upon this family, 
            whether it is customers, workers, students, or so on. Each type of line is a further personification of her various faces, 
            they represent her in different timeframes and moods. Festive, casual, young, demure...
          </p>
        </div>
        <hr></hr>

        {/* Categories Section */}
        <table>
          {/* Woman Section */}
          <tr>
            <td>
              <div className="first">
                <h1>Woman</h1>
                <p>
                  The GENERATION woman line embodies a casual cool aesthetic relatable to the urban Pakistani woman of today. 
                  The design philosophy is a celebration of femininity and style, incorporating prints and embroideries 
                  from various sources of inspiration.
                </p>
              </div>
            </td>
            <td>
              <img src="images/Woman.webp" alt="Woman" />
            </td>
          </tr>

          {/* Formals Section */}
          <tr>
            <td>
              <img src="images\Formals_df90f1c1-10e3-451a-89d5-0cd9d9fbd5be.webp" alt="Formals" />
            </td>
            <td>
              <div className="first">
                <h1>Formals</h1>
                <p>
                  The Formals line features a variety of wedding and event wear. With the amalgamation of traditional and 
                  modern embellishments and printing techniques. GENERATION formals make for exquisite one-of-a-kind pieces 
                  that would be treasured for years to come.
                </p>
              </div>
            </td>
          </tr>

          {/* Classic Section */}
          <tr>
            <td>
              <div className="first">
                <h1>Classic</h1>
                <p>
                  The GENERATION Classic line is all about timeless elegance. The designs rely on the revival of traditional 
                  embroidery patterns and techniques from around the world, rendering them into timeless wearable pieces that 
                  are appreciated by women of all ages.
                </p>
              </div>
            </td>
            <td>
              <img src="images/Classic.webp" alt="Classic" />
            </td>
          </tr>

          {/* Basic Section */}
          <tr>
            <td>
              <img src="images/Basic.webp" alt="Basic" />
            </td>
            <td>
              <div className="first">
                <h1>Basic</h1>
                <p>
                  The GENERATION Basic line designs minimal, no-fuss clothing. The creative focus is on edgy cutlines. 
                  The line features comfortable yet fashion-forward separates in solid colours in a variety of prints and jacquards.
                </p>
              </div>
            </td>
          </tr>

          {/* Cottage Section */}
          <tr>
            <td>
              <div className="first">
                <h1>Cottage</h1>
                <p>
                  GENERATION Cottage employs the unsung female artisans and craftswomen of various remote rural regions of Pakistan, 
                  in an effort to sustain local heritage and craft. Many of these women belong to conservative communities and are often 
                  not permitted to step outside of their homes in order to work, hence GENERATION brings work to them at their very doorstep.
                </p>
              </div>
            </td>
            <td>
              <img src="images/cottage.webp" alt="Cottage" />
            </td>
          </tr>
        </table>
      </div>
      </div>
    </Layout>
  );
};

export default About;
