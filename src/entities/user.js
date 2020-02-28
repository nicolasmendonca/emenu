class User {
  constructor({ uid, displayName, photoUrl, email, isNewUser }) {
    this.attributes = Object.seal({
      uid,
      displayName,
      photoUrl,
      email,
      isNewUser,
    });
  }

  get(attribute) {
    return this.attributes[attribute];
  }

  set(attribute, value) {
    return new User({ ...this.attributes, [attribute]: value });
  }

  static fromJson({
    user: { uid, displayName, photoURL, email },
    additionalUserInfo: { isNewUser },
  }) {
    return new User({
      uid,
      displayName,
      photoUrl: photoURL,
      email,
      isNewUser,
    });
  }

  toJson() {
    const { uid, displayName, photoUrl, email, isNewUser } = this.attributes;
    return {
      user: { uid, displayName, photoURL: photoUrl, email },
      additionalUserInfo: { isNewUser },
    };
  }
}

export default User;
