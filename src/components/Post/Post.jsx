import classNames from "classnames";

import image1 from "../../postImages/article_image1.png";
import image2 from "../../postImages/article_image2.png";
import image3 from "../../postImages/article_image3.png";
import image4 from "../../postImages/article_image4.png";
import image5 from "../../postImages/article_image5.png";
import image6 from "../../postImages/article_image6.png";

import './Post.scss';

const postImages = [image1, image2, image3, image4, image5, image6];

export const Post = ({
    photoId,
    date,
    minRead,
    title,
    text,
    onDesktop,
  }) => (
    <article className="Post">
      <div className={classNames("Post__content", {
          "Post__content--desktop": onDesktop,
        })}>
        <div className={classNames("Post__img-wrapper", {
          "Post__img-wrapper--desktop": onDesktop,
        })}>
          <img
            src={postImages[photoId - 1]}
            alt="Plants"
            className={classNames("Post__img", {
              "Post__img--desktop": onDesktop,
            })}
          />
        </div>
        <div>
          <p className="Post__date">
            {`${date} · ${minRead} min read`}
          </p>
          <h4 className={classNames("Post__title", {
          "Post__title--desktop": onDesktop,
        })}>
            {title}
          </h4>
          <p className="Post__text">
            {text}
          </p>
        </div>
      </div>
    </article>
  );
