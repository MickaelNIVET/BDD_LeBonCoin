module.exports = async (policyContext, config, { strapi }) => {
  // console.log(policyContext.state.user);
  const requesterId = policyContext.state.user.id;
  const offerId = policyContext.request.params.id;
  // console.log(offerId);
  const offer = await strapi.entityService.findOne(
    "api::offer.offer",
    offerId,
    { populate: ["owner"] }
  );
  console.log(offer);
  if (requesterId === offer.owner.id) {
    return true;
  } else {
    return false;
  }
};
