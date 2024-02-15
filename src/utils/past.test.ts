import { returnPastParticle } from "./past";

describe("returnPastParticle", () => {
  it("should return the correct past particle for verbs with 'a' and 'ı'", () => {
    expect(returnPastParticle("aç")).toBe("tı");
    expect(returnPastParticle("çalış")).toBe("tı");
    expect(returnPastParticle("hoşlan")).toBe("dı");
    expect(returnPastParticle("ayrıl")).toBe("dı");
  });
  it("should return the correct past particle for verbs with 'e' and 'i'", () => {
    expect(returnPastParticle("sev")).toBe("di");
    expect(returnPastParticle("git")).toBe("ti");
    expect(returnPastParticle("bil")).toBe("di");
    expect(returnPastParticle("kaybet")).toBe("ti");
  });
  it("should return the correct past particle for verbs with 'o' and 'u'", () => {
    expect(returnPastParticle("ol")).toBe("du");
    expect(returnPastParticle("otur")).toBe("du");
    expect(returnPastParticle("buluş")).toBe("tu");
    expect(returnPastParticle("koş")).toBe("tu");
  });
  it("should return the correct past particle for verbs with 'ö' and 'ü'", () => {
    expect(returnPastParticle("gör")).toBe("dü");
    expect(returnPastParticle("ört")).toBe("tü");
    expect(returnPastParticle("gorün")).toBe("dü");
    expect(returnPastParticle("düş")).toBe("tü");

  });
});
