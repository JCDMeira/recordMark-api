import RemarkModel from "../models/RemarkModel";

const formatTime = (value) => (value >= 10 ? value : "0" + value);
const formatMs = (value) => {
  if (value < 10) return "00" + value;
  if (value < 100) return "0" + value;
  return value;
};

class RemarkController {
  static async addRemark({ body }, res) {
    try {
      const { min, seg, ms, created_by } = body;

      if (min > 60 || seg >= 60 || ms >= 1000)
        return res.status(400).json({ message: "Invalid input format" });

      const allMs = min * 60 * 1000 + seg * 1000 + ms;
      const timeInString = `${formatTime(min)}:${formatTime(seg)}.${formatMs(
        ms
      )}`;

      const date = new Date().getTime();

      const remark = await RemarkModel.create({
        time: allMs,
        time_to_string: timeInString,
        created_by,
        created_at: date,
        updated_at: date,
      });

      return res
        .status(201)
        .json({ remark, message: "Remark sucessfuly created" });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  }

  static async getRemark({ query: { userId } }, res) {
    try {
      const remarks = await RemarkModel.find(
        { created_by: userId },
        {
          _id: 1,
          time: 1,
          time_to_string: 1,
        }
      );

      return res.status(200).json({ remarks });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  }

  static async editRemark({ body }, res) {
    try {
      const { min, seg, ms, created_by } = body;

      if (min > 60 || seg >= 60 || ms >= 1000)
        return res.status(400).json({ message: "Invalid input format" });

      const allMs = min * 60 * 1000 + seg * 1000 + ms;
      const timeInString = `${formatTime(min)}:${formatTime(seg)}.${formatMs(
        ms
      )}`;

      const date = new Date().getTime();

      const remark = await RemarkModel.findOneAndUpdate({
        time: allMs,
        time_to_string: timeInString,
        updated_at: date,
      });

      return res
        .status(201)
        .json({ remark, message: "Remark sucessfuly updated" });
    } catch ({ message }) {
      return res.status(400).json({ message });
    }
  }

  static async deleteRemark(req, res) {}
}

export default RemarkController;
