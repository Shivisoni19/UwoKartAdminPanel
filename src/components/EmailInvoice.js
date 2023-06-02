import React from "react";

function EmailInvoice() {
  return (
    <div>
      <div className="tab-pane fade" id="Invoice-Email">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="d-flex justify-content-center">
              <table className="card p-5">
                <tr>
                  <td></td>
                  <td className="text-center">
                    <table>
                      <tr>
                        <td className="text-center">
                          <h2>$389.00 Paid</h2>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center py-2">
                          <h4 className="mb-0">Thanks for usingeBazar.</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="pt-2 pb-4">
                          <table>
                            <tr>
                              <td>
                                Attn: <strong>Dianalove</strong> Winston Salem
                                FL 27107
                                <br />
                                Email: Dianalove@gmail.com
                                <br />
                                Phone: +88 123 456 789
                                <br />
                              </td>
                            </tr>
                            <tr>
                              <td className="pt-2">
                                <table className="table table-bordered">
                                  <tr>
                                    <td className="text-start">Rado Watch</td>
                                    <td className="text-end">$ 330.00</td>
                                  </tr>
                                  <tr>
                                    <td className="text-start">
                                      1 Year Product Warranty
                                    </td>
                                    <td className="text-end">$ 10.99</td>
                                  </tr>
                                  <tr>
                                    <td className="text-start">
                                      Production Transportation
                                    </td>
                                    <td className="text-end">$ 49.00</td>
                                  </tr>
                                  <tr>
                                    <td className="text-start w-80">
                                      <strong>Total</strong>
                                    </td>
                                    <td className="text-end fw-bold">
                                      $389.00
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td className="pt-2 pb-2 text-center">
                          <a href="#">View in browser</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">
                          PXL Inc. 47 Aurora St. South West, CT 06074
                        </td>
                      </tr>
                    </table>
                    <table className="mt-3 text-center w-100">
                      <tr>
                        <td className="aligncenter content-block">
                          Questions? Email{" "}
                          <a href="mailto:">info@pixelwibes.com</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        {/* <!-- Row end  --> */}
      </div>
    </div>
  );
}

export default EmailInvoice;
